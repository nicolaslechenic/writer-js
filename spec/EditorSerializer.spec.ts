
import {EditorSerializer}  from "../src/EditorSerializer"

describe('EditorSerializer',() => {
  describe('#stringifiedEvents', () => {
    it('return strigifyed JSON', () => {
      let serializer = new EditorSerializer({actions: [{type: "key", content: "a", from: 0, to: 0}]})
  
      expect(serializer.stringifiedEvents()).toEqual('{"actions":[{"type":"key","content":"a","from":0,"to":0}]}')
    })
  })
  describe('#update', () => {
    it('change the data of events', () => {
      let serializer = new EditorSerializer({actions: []})

      serializer.update({actions: [{type: "key", content: "a", from: 0, to: 0}]})
  
      expect(serializer.stringifiedEvents()).toEqual('{"actions":[{"type":"key","content":"a","from":0,"to":0}]}')
    })
  })
}) 
