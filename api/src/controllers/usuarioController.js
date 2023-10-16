const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

exports.criarUsuario = async (req, res, next) => {
    if (req.body.name == undefined || req.body.name == '' || req.body.name == null) {
        return res.status(500).json({
            status: 500,
            message: 'Campo "name" obrigatório!'
        });
    }
    if (req.body.password == undefined || req.body.password == '' || req.body.password == null){
        return res.status(500).json({
            status: 500,
            message: 'Campo "password" obrigatório!'
        });
    }
    if (req.body.email == undefined || req.body.email == '' || req.body.password == null){
        return res.status(500).json({
            status: 500,
            message: 'Campo "email" obrigatório!'
        });
    }
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        },
    });    
    return res.status(201).json({
        status: 201,
        message: `Usuário "${user.name}" cadastrado com sucesso!`
    });
}

exports.getUser = async (req, res, next) => {
    const user = await prisma.user.findUnique({
        where: {
            email: 'phpauli@gmail.com',
        }
    });
}
