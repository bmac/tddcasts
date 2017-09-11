const initalState = {}

export default function reducer(state = initalState, action) {
   switch (action.type) {
     case 'UPDATE_RECORDS':
       let records = [].concat(action.document.data, action.document.included || [])
       return records.reduce((state, record) => {
         state[record.type] = state[record.type] || {}
         state[record.type][record.id] = record
         return state
       }, {...state})
     default:
       return state
   }
}


const getRecord = (state, type, id) => {
  let typeMap = state[type] || {}
  let record = typeMap[id]
  if (record) {
    let { id, attributes } = record
    return {
      id,
      ...attributes
    }
  }
  return null
}

export const selectQuery = (state, query) => {
  let episodes = state['Episode'] || {}
  return Object.values(episodes).map((record) => {
    return {
      podcast: getRecord(state, 'Podcast', record.relationships.podcast.data.id),
      id: record.id,
      ...record.attributes
    }
  })
}

 
