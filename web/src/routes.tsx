import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanagesMap';

/* 
    Não é feita uma comparação restrita no nome inteiro, apenas a inicial.  
    Portanto todas as rotas que começassem com / seriam chamadas
*/
// O "exact" faz com que apenas quando o path for digitado igual, ele seja chamado
// Switch faz com que apenas 1 rota seja chamada por vez (Opicional)


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;