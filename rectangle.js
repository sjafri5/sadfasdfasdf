

class Rectangle{
  constructor(props){
    this.width = props.width;
    this.height= props.height;
    this.color= props.color;
    this.element = document.createElement('div')
    this.addListener()
    this.render()
  }

  render(){
    const main = document.querySelector('main')
    this.updateStyles()
    main.append(this.element)
  }

  updateStyles(){
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.backgroundColor = this.color
  }

  addListener(){
    console.log(this) // Rectange{}

    this.element.addEventListener('click', () => {
      this.width += 10
      this.height += 10
      this.updateStyles()
    })
  }
}





const props = {
  color: 'red',
  width: 100,
  height: 200,
}

const r1 = new Rectangle(props)



function foo(args){
}























