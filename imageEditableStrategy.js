import UploadField from './uploadField.js'

class ImageEditableStrategy {
  constructor(target){
    this.target = target;
    this.uploadField = new UploadField(target);
  }
  apply(){
    this.target.addEventListener('mouseover', () => this.hideOrInsertImgUploader())
    this.target.addEventListener('mouseout', () => this.uploadField.hide())
  }

  hideOrInsertImgUploader(){
    const uploader = this.uploadField
    uploader.ref() ? uploader.show() : uploader.init()
  }
}

export default ImageEditableStrategy
