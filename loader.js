class Loader {
  constructor(element){
    this.parent = element;
    this.template = `<i id="loader" class="fas fa-circle-notch fa-spin"></i>`;
  }

  insert(){
    this.parent.insertAdjacentHTML('afterbegin', this.template)
  }

  remove(){
    this.parent.querySelector('#loader').remove()
  }
}

export default Loader
