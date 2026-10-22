const Category = require("../Models/categoryModel");

const createCategory = async (data) => {
  const existingCategory = await Category.findOne({
    name: data.name,
  });
  if (existingCategory) {
    throw new Error("Category already exist");
  }
  const newCategory = await Category.create(data);
  return newCategory;
};

const getCategories = async () => {
  const categories = await Category.find();
  return categories;
};

const getCategory = async (id) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new Error("Category not found");
  }
  return category;
};

const updateCategory = async (id, data) => {
  const updatedCategory = await Category.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  if (!updatedCategory) {
    throw new Error("Category not found");
  }
  return updatedCategory;
};

const deleteCategory = async (id) => {
  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    throw new Error("Category not found");
  }
  return category;
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
