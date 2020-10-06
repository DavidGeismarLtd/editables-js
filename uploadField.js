import Loader from './loader.js';
import FileUpload from './fileUpload';
class UploadField {
  // could refacto with different uploadStrategy in the future
  constructor(element){
    this.parent = element;
    this.loader = new Loader(element);
    this.template = `<div class='upload-img-icon'>
                        <input type="file" name="editable_field[image]" class="cloudinary-fileupload">
                        <i class="fas fa-cloud-upload-alt"></i>
                      </div>`;
  }

  init(){
    this.insert();
    this.setup();
  }

  isPresent() {
    this.ref() ? true : false
  }

  show(){
    this.ref().classList.remove('invisible')
  }

  hide(){
    this.ref() ? this.ref().classList.add('invisible') : null
  }

  ref(){
    return this.parent.querySelector('.upload-img-icon')
  }

  insert(){
    this.parent.insertAdjacentHTML('afterbegin', this.template)
  }

  setup(){
    const uploader = this.parent.querySelector('.cloudinary-fileupload');
    uploader.addEventListener('change', (event) => this.uploadImage(event));
  }

  remove(){
    this.parent.querySelector('#loader').remove()
  }

  // TODO extract this into its own class too
  uploadImage(event){
    this.hide()
    this.loader.insert()
    const file = event.target.files[0]
    var successCallback = (res) => {
      this.loader.remove()
      eval(res.data);
    }
    new FileUpload(file, this.parent.dataset.editableroute, successCallback).create()
  }
}

export default UploadField
