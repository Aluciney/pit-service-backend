const { vehicle } = require('../app/models');

module.exports = {
    async index(req, res) {
        const vehicles = await vehicle.findAll();
        res.status(200).json(vehicles);
        return res.send();
    },

    async show(req, res) {
        const _vehicle = await vehicle.findByPk(req.params.id);
        if (_vehicle === null) {
            return res.status(404).json({ error: `Veículo não encontrado!` });
        }
        return res.status(200).json(_vehicle);
    },

    async store(req, res) {
        try {
            const _vehicle = await vehicle.create(req.body);

            return res.status(201).json(_vehicle);
        } catch (error) {
            return res.status(404).json({ error: `Erro ao cadastrar veículo. Erro: ${error}` });
        }
    },

    async update(req, res) {
        try {
            const _vehicle = await vehicle.findByPk(req.params.id);
            if(!_vehicle){
                return res.status(404).json({ error: `Veículo não encontrado.` });
            }
            await _vehicle.update(req.body);

            return res.json(_vehicle);
        } catch (error) {
            return res.status(404).json({ error: `Erro ao atualizar veículo. Erro: ${error}` });
        }
    },

    async destroy(req, res) {
        try {
            const _vehicle = await vehicle.findByPk(req.params.id);
            await _vehicle.destroy();
            return res.send();
        } catch (error) {
            return res.status(404).json({ error: `Erro ao deletar veículo. Erro: ${error}` });
        }
    }
};