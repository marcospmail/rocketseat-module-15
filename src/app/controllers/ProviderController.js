import Provider from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await Provider.findAll({
      where: { provider: true },
      order: ['name'],
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: {
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url'],
      },
    });

    return res.json(providers);
  }
}

export default new ProviderController();
