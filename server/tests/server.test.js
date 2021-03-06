const expect = require ('expect');
const request = require('supertest');
const {ObjectID}=require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos=[{
  _id:new ObjectID(),
  text:'First test todo'
},{
  id:new ObjectID(),
  text:'Second test todo',
  completed:true,
  completedAt: 333
}];

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
  return  Todo.insertMany(todos);
}).then(()=>done());
});



describe('POST/todo', () =>{
  it('should create a new todo', (done) =>{
    var text ='Test Todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if (err){
        return done(err);
      }
      Todo.find({text}).then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  });

  it('should not create todo with invalid data',(done) =>{
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res)=>{
      if (err){
        return done(err);
      }
      Todo.find().then((todos)=>{
      expect(todos.length).toBe(2);
      done();
    }).catch((e)=> done(e));
  });
  });
});

describe('GET /todos',()=>{
  it('shouls get all todos',(done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  })
});

describe('GET /todos/:id',()=>{
  it('should return todo doc',(done)=>{
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo.text).toBe(todos[0].text);
    })
    .end(done);
  })

  it('should return a 404 if TODO not found',(done)=>{
    var hexID = new ObjectID().toHexString();
    request(app)
    .get(`/todos/${hexID}}`)
    .expect(404)
    .end(done);
  })

  it('should return a 404 for non object ID',(done)=>{
    request(app)
    .get(`/todos/123}`)
    .expect(404)
    .end(done);
  })

});



describe('DELETE /todos/:id',()=>{

  it('should delete a todo doc',(done)=>{

    var hexID = todos[0]._id.toHexString();

    request(app)
    .delete(`/todos/${hexID}`)
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo._id).toBe(hexID);
    })
    .end((err,res)=>{
      if (err){
        return done(err);
      }
      Todo.findById(hexID).then((todo)=>{
        expect(todo).toNotExist();
        done();
      },(err)=>{
        done(err);
      }).catch((e)=>done(e));
    });
  })

  it('should return a 404 if TODO not found',(done)=>{
    var hexID = new ObjectID().toHexString();
    request(app)
    .delete(`/todos/${hexID}}`)
    .expect(404)
    .end(done);
  })

  it('should return a 404 for non object ID',(done)=>{
    request(app)
    .delete(`/todos/123}`)
    .expect(404)
    .end(done);
  })
});

describe('PATCH /todos/:id',()=>{
  it('should update the todo',(done)=>{
    var hexID = todos[0]._id.toHexString();

    var text = 'Updated todo from testing';

    request(app)
    .patch(`/todos/${hexID}}`)
    .send({
      completed:true,
      text
    })
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo.text).toBe(text);
      expect(res.body.todo.completed).toBe(true);
      expect(res.body.todo.completedAt).tobeA('number');
    })
    .end(done)
  });

  // it('should clear completedAt when the todo is not completed',(done)=>{
  //
  // });

});
