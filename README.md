# Desafio modulo Docker - fullCycle

repositório dockerHub desafio GO: [https://hub.docker.com/r/gustavolopesv3/codeeducation](https://hub.docker.com/r/gustavolopesv3/codeeducation)

Durante o modulo de docker foi proposto dois desafios:

 1.  criar uma imagem com tamanho menor que 2mb e publicar no dockerHub
 

		> Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!  
Você terá que publicar uma imagem no docker hub. Quando executarmos:
docker run <seu-user>/codeeducation
Temos que ter o seguinte resultado: Code.education Rocks!
Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".
Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.
A imagem de nosso projeto Go precisa ter menos de 2MB =)

	 
 2. Criar criar um proxy reverso com nginx usando imagem do nodejs e mysql. 
	 - Subir uma API em nodejs e ao subir essa API criar uma tabela people no mysql
	 - Ao fazer uma request tipo get em '/' deve exibir 'Full Cycle Rocks!' e os nomes que foram inseridos no mysql
	 

	> Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
O retorno da aplicação node.js para o nginx deverá ser:
Full Cycle Rocks!
Lista de nomes cadastrada no banco de dados.
Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Para rodar o desafio de nodejs basta acessar a pasta 'desafio-node' e rodar o comando `docker-compose up -d`
basta abrir o navegador e digitar `localhot:8080` que o HTML sera exibido
	
