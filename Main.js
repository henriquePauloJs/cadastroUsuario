import { useState } from "react";
import './Main.css';


   
    // this.handleChange = (e) => {
    //     this.setState({
    //         novoUsuario: e.target.value
    //     })
    // } 
    

   
       function App(){

        const [ usuario ] = useState("")
        const [ senha, setSenha ] = useState("")
        const [ email, setEmail ] = useState("")
        
        return (
            <div className="main">
            <h1> Cadastro de Usuário</h1>
             <form action="">
                <div className="wrap-input">
                    <input className={usuario !== "" ? 'has-val input' : 'input' } type="usuário" value={usuario} ></input> 
                    <span className="focus-input" data-placeholder="Usuário"></span>
                </div>
                
                <div className="wrap-input">
                    <input className={senha !== "" ? 'has-val input' : 'input' } type="password" value={senha} onChange={e => setSenha(e.target.value)}></input> 
                    <span className="focus-input" data-placeholder="Senha"></span>
                </div >
                
                <div className="wrap-input">
                    <input className={email !== "" ? 'has-val input' : 'input' } type="email" value={email} onChange={e => setEmail(e.target.value)}></input> 
                     <span className="focus-input" data-placeholder="Email"></span>
                </div>
                <div>
                <button type="submit"> Cadastrar</button>
                </div>
             </form>
            </div>
        )
    }
export default App;