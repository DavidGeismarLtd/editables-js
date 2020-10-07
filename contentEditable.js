import TextEditableStrategy from './textEditableStrategy.js'
import ImageEditableStrategy from './imageEditableStrategy.js'
class ContentEditable {
  constructor(editableKind, strategy = null){
    this.editables =  document.querySelectorAll(`[data-editablekind='${editableKind}']`);
    this.editionStrategy = strategy || this.getStrategy(editableKind)
  }

  init(){
    for (const element of this.editables){
      new this.editionStrategy(element).apply();
    }
  }

  getStrategy(editableKind){
    const strategiesMap = {
      'text': TextEditableStrategy,
      'image': ImageEditableStrategy,
    }
    return strategiesMap[editableKind] || TextEditableStrategy
  }
}

export default ContentEditable
