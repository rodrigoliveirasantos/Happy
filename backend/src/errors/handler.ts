import { ErrorRequestHandler, response } from'express';
import { ValidationError } from 'yup';


// Isso serve para retornar erros assim:
/*
    {
        chave_com_erro: [ erros ]
    }
    {
        "name": ["vazio", "minimo de caracteres"] 
    }
*/ 

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof ValidationError){
        let errors: ValidationErrors = {};

        //err.inner é onde está todos os erros com as informações
        err.inner.forEach(error => {
            errors[error.path] = error.errors;
        });

        return res.status(400).json({ message: 'Validação falhou', errors })
    }
    
    console.error(err);

    return res.status(500).json({ message: 'Erro interno. Desculpe xd.' })
}

export default errorHandler