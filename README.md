# WebsiteSquadGreen

<p align="justify">
Eu, como um usuário, quero poder logar no website de colaboradores da Compass para que e consiga acessar com segurança e usufruir das funcionalidades disponíveis.
</p>

# Integrantes

* <a href="https://github.com/WelbertJr"> Welbert Júnior</a>
* <a href="https://github.com/RafaelBrandaoBastos"> Rafael Brandão</a>
* <a href="https://github.com/Ovictorhugol"> Victos Hugo</a>
* <a href="https://github.com/paulovitortss"> Paulo Souza</a>

# Cenário Atual:
<p align="justify">
Atualmente não temos um sistema e login num ambiente digital que promova uma maior integração e centralização de funcionalidade para colaboradores na Compass.
</p>

# Cenário Desejado:
Desejamos um login que possa permitir uma boa usabilidade ao usuário.

# Apresentação
### Rotas

<p align="justify">
Ao tentar acessar uma URL que não existe na aplicação, o usuário é direcionado para uma página de erro 404. Para acessar a página de sucess o usuário deve fazer o login, se o mesmo não o fizer e tentar acessar a página seguinte, será direcionado para uma página de erro 401 que o redirecionará de volta para a página de login após cinco segundos:
</p>

<p align="center">
  <img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadGreen/blob/develop/CompassLogon/src/assets/rotas.gif">
</p><br/>

### Validação

<p align="justify">
Para passar para a página de sucess o usuário deve fazer o login. Só é aceito para o login o padrão de <b>nome.sobrenome</b> para usuário e de <b>números de seis a nove dígitos</b> para senha. Caso o padrão não seja seguido é apontada uma mensagem de erro informando que o padrão está incorreto, impedindo o usuário de prosseguir para a próxima página:
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadGreen/blob/develop/CompassLogon/src/assets/validacao.gif">
</p><br/>

### Tempo de login

<p align="justify">
Ao fazer login é iniciada a contagem de um temporizador de 600 segundos. Se o usuário quiser permanecer por mais de 600 segundos logado ele pode apertar o botão de continuar navegando que zera a contagem do temporizador. Ao fazer logout o usuário é direcionado para a página de login novamente, e se o usuário não deslogar é feito um login automático novamente após cinco segundos:
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadGreen/blob/develop/CompassLogon/src/assets/refresh.gif">
</p><br/>

### Logout

<p align="justify">
Caso não queria fazer um novo login de forma automática o usuário deve clicar no botão deslogar que aparece junto ao pop-up. O botão para a contagem do contador de cinco segundos e desloga o usuário:
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadGreen/blob/develop/CompassLogon/src/assets/logout.gif">
</p><br/>

### Responsividade

<p align="justify">
Ao atingir a resolução de 768px o layout muda conforme demonstrado abaixo. A validação dos inputs ainda existe e a mensagem de erro também:
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadGreen/blob/develop/CompassLogon/src/assets/errorMessage.gif">
</p><br/>

<p align="justify">
Ao fazer login o usuário é direcionado para a página de sucess que também é responsiva:
</p><br/>

<p align="center">
<img src="https://github.com/RafaelBrandaoBastos/WebsiteSquadGreen/blob/develop/CompassLogon/src/assets/responsividade..gif">
</p><br/>

## Tecnologias utilizadas:
<img alt="Html5" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" /> <img alt=Trello src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" /> 
<img alt=VisualStudio src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white" /> <img alt="Git" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
