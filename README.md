# Drag and Drop Exercise

Projeto criado para testar a biblioteca de Drag And Drop *(@hello-pangea/dnd)* usando React e NextJS.

## Descrição

Neste projeto você poderá arrastar os objetos entre 3 áreas distintas e adicionar novos items dentro delas separadamente.

A ideia por trás desse projeto é testar a biblioteca para utilizar em outros projetos. Por exemplo, usar em um projeto para criar algo similar a um Kanban.

### Detalhamento

- Primeiramente é necessário criar o contexto da área que terá o comportamento de arrastar e soltar (DragDropContext).
-  - Propriedades obrigatórias: 
   
            onDragEnd={handleOnDragEnd} // função para controlar o que será
                                            feito no final do arrastar

- Após criado o contexto é necessário criar a área ou as áreas em que será possível soltar os itens (Droppable).
   - Propriedades obrigatórias: 
   
            droppableId={id}
            
            {(provided)=>children}

            {...provided.droppableProps}
            ref={provided.innerRef}

            
            {provided.placeholder}
            
- E por último é necessário criar os itens que serão arrastáveis (Draggable).
  
  - Propriedades obrigatórias: 
   
            draggableId={item.id} 
            index={index}
            {(provided)=>children}
            ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}


## Instalação

    npm i

    / ou /

    yarn

## Execução

    npm run dev

    / ou /

    yarn dev

## Updates futuros

Futuramente irei adicionar mais comportamentos e personalização, pois no momento o objetivo foi alcançado.

Siga o projeto para se manter atualizado.