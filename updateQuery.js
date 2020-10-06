import axios from 'axios'
class UpdateQuery {
  constructor(element, format='json'){
    const { editablemodel, editableroute, editableparam } = element.dataset;
    this.format = format;
    this.model = editablemodel ;
    this.route = editableroute;
    this.param = editableparam;
    this.content = element.innerHTML;
  }

  init(){
    axios.patch(`${this.route}.${this.format}`, {
      [this.model]: {
        [this.param]: this.content,
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default UpdateQuery
