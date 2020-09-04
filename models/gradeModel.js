import mongoose from 'mongoose';

const gradeSchema = mongoose.Schema ({
    name:{
      type: String,
      required: true,
    },
    subject:{
      type: String,
      required: true,
    },
    type:{
      type: String,
      required: true,
    },
    value:{
      type: Number,
      required: true,
      validate(value){
        if (value < 0)
          throw new Error('Não é permitido inserir valor negativo ');
      },
      min: 0,
    },
    lastModified:{
      type: Date,
      default: Date.now,
    },
});

gradeSchema.method("toJSON", function(){
  const {__v, _id, ...object} = this.toObject();
  object.id = _id;
  return object;
});

const gradeModel = mongoose.model('grades', gradeSchema, 'grades');

export { gradeModel };
