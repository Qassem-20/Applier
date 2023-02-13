import Consumer from '../models/Consumer.js';

const fetchConsumers = async (req, res) => {

    const consumers = await Consumer.find();

      res.json({ consumers });
  };
  
  const fetchConsumer = async (req, res) => {
    const consumerId = req.params.id;

    const consumer = await Consumer.findById(consumerId);
    
    res.json({ consumer });
  };
  
  const createConsumer = async (req, res) => {
    const { name, email, password, type, phone } = req.body;
  
    const consumer = await Consumer.create({
      name,
      email,
      password,
      type,
      phone, 
    });
  
    res.json({ consumer });
  };
  
  const updateConsumer = async (req, res) => {
    const consumerId = req.params.id;
  
    const { type } = req.body;
  
    await Consumer.findByIdAndUpdate(consumerId, {
      type,
    });
  
    const consumer = await Consumer.findById(consumerId);
  
    res.json({ consumer });
  };
  
  const deleteConsumer = async (req, res) => {
    const consumerId = req.params.id;
  
    await Consumer.deleteOne({ id: consumerId });
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchConsumers,
    fetchConsumer,
    createConsumer,
    updateConsumer,
    deleteConsumer,
  };