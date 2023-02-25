import Consumer from '../models/Consumer.js';

const fetchConsumers = async (req, res) => {
  
    const consumers = await Consumer.find();

      res.json({ consumers });
  };

const sortConsumers = async (req, res) => {
  
  const consumers = await Consumer.find().sort({ name: 1 })

  res.json({consumers});
}
  
  const fetchConsumer = async (req, res) => {
    const consumerId = req.params.id;

    const consumer = await Consumer.findById(consumerId);
    
    res.json({ consumer });
  };
  
  const createConsumer = async (req, res) => {
    const { name, email, Password, phone_number, nationality, statue , suspendBy} = req.body;
  
    const consumer = await Consumer.create({
    name,
    email,
    Password, 
    phone_number, 
    nationality, 
 
    });
  
    res.json({ consumer });
  };
  
  const updateConsumer = async (req, res) => {
    const consumerId = req.params.id;
  
    const { name, email, password, phone_number, nationality } = req.body;
  
    await Consumer.findByIdAndUpdate(consumerId, {
    name,
    email,
    password, 
    phone_number, 
    nationality, 
    });
  
    const consumer = await Consumer.findById(consumerId);
  
    res.json({ consumer });
  };
  
  const deleteConsumer = async (req, res) => {
    const consumerId = req.params.id;
  
    await Consumer.findByIdAndDelete( consumerId );
  
    res.json({ success: "Record deleted" });
  };
  
  export {
    fetchConsumers,
    fetchConsumer,
    createConsumer,
    updateConsumer,
    deleteConsumer,
    sortConsumers,
  };