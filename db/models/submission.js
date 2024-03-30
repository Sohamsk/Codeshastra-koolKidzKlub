import mongoose from "mongoose";
const { Schema, model } = mongoose;

const submissionSchema = Schema({
  course_name: {
    type: String,
    required: true,
  },
  course_id: {
    type: Number,
    required: true,
    default: 0,
  },
  std_name: {
    type: String,
    required: true,
  },
  std_id: {
    type: Number,
    required: true,
    default: 0,
  },
  address: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  author_id: {
    type: String,
    required: true,
    default: 0,
  },
  submission_time: {
    type: Number,
    required: true,
    default: 1,
  },
  transaction_hash: {
    type: String,
    required: true,
  },
  content: {
    type: Buffer,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Submission =
  mongoose.models.Submission || model("Submission", submissionSchema);
export default Submission;
