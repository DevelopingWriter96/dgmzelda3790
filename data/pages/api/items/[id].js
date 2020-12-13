import dbConnect from '../../../utils/dbConnect'
import Item from '../../../models/Item'
import { parseAppearances } from '../../../utils/responsePipes'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const item = await Item.findById(id)/* find data that contains ID in database */
        item = parseAppearances(item)
        res.status(200).json({ success: true, count: item.length, data: item })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
