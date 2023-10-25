import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com Vue.js</Paragrafo>
    <LinkBotao>Visulaizar</LinkBotao>
  </Card>
)

export default Projeto
