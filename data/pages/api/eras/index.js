import dbConnect from '../../../utils/dbConnect'
import Era from '../../../models/Era'
import { parseLimit, parseGames } from '../../../utils/responsePipes'

export default async function handler(req, res) {
  const { method } = req
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseLimit(req.query.limit),
    name: req.query.name || undefined
  }

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        var eras
        if (pageOptions.name) {
          eras = await Era.find({name: new RegExp(pageOptions.name)})
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)
        }
        else {
          eras = await Era.find({})
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)
        }
        eras = parseGames(eras)
        res.status(200).json({ success: true, count: eras.length, data: eras })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
