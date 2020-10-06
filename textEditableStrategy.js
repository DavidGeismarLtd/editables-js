import UpdateQuery from './updateQuery.js'
class TextEditableStrategy {
  constructor(target){
    this.target = target
  }
  apply(){
    this.target.addEventListener('blur', () =>  new UpdateQuery(this.target).init())
  }
}

export default TextEditableStrategy
