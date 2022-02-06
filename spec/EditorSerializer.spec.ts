
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
      // Arrange
      let serializer = new EditorSerializer({actions: []})

      // Act
      serializer.update({actions: [{type: "key", content: "a", from: 0, to: 0}]})
  
      // Assert
      expect(serializer.stringifiedEvents()).toEqual('{"actions":[{"type":"key","content":"a","from":0,"to":0}]}')
    })
  })
}) 
