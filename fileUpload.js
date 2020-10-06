import { DirectUpload } from "@rails/activestorage";
import axios from 'axios';

class FileUpload {
  constructor(file, route, successCallback){
    this.directUpload = new DirectUpload(file, "/custom_direct_uploads");
    this.route = route;
    this.successCallback = successCallback;
  }

  create(){
    this.directUpload.create((error, blob) => {
      if(error){
        console.log(error)
      } else {
        axios.patch(`${this.route}.js`, {
          editable_field: {
            image: blob.signed_id
          },
        }).then((res) => {
          this.successCallback(res)
        }).catch((err) => {
          console.log(err);
        })
      }
    })
  }
}

export default FileUpload
