const Sweepstakes = require("../models/Sweepstakes");
const Awards = require("../models/Awards");
const Files = require("../models/Files");
class SweepstakesController {
  async index(req, res) {
    console.log("listando===> ", req.body);
    const sweepstakes = await Sweepstakes.findAll();
    return res.json(sweepstakes);
  }
  async create(req, res) {
    console.log("criando===> ", req.body);
    const { sweepstake, awards } = req.body;

    try {
      const sweepstakesResponse = await Sweepstakes.create(sweepstake);

      await awards.forEach(async (award) => {
        const { file } = award;

        //TODO: salvar no hd com multer
        // const buffer = Buffer.from(file.base64)

        const fileData = {
          mimetype: file.mimetype,
          filename: file.filename,
          extension: file.extension,
        };

        const fileResponse = await Files.create(fileData);
        const awardsResponse = await Awards.create({
          award,
          fileId: fileResponse.id,
        });
      });

      res.json(req.body);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

module.exports = new SweepstakesController();
