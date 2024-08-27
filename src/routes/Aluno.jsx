import {Dados} from '../components/Dados'

const Aluno=()=>{

    const{nome,email,idade}=Dados

    return(
        <>
        <h1>Vai se fuder caralho</h1>
        <p>Nome do Aluno:{nome}</p>
        <p>Email do Aluno:{email}</p>
        <p>Idade do Aluno:{idade}</p>
        </>
    )
}
export default Aluno