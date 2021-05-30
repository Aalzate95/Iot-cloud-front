class ForoClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Escribe aquí tu pregunta!'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Se ha realizado una pregunta: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          Elige El tema:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Tema1">Tema1</option>
            <option value="Tema2">Tema2</option>
            <option value="Tema3">Tema3</option>
            <option value="Tema4">Tema4</option>
          </select>
        </label>
          <label>
            Pregunta:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Enviar Pregunta" />
        </form>
      );
    }
  }
  
  const Foro= ()=>{
    const instancia = new ForoClass(props);
    const res = instancia.render();
  }

  export default Foro