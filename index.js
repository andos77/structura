// Simple validator core for Structura
const s = {
  object: (schema) => ({
    safeParse: (data) => {
      const errors = {};
      for (const key in schema) {
        const rules = schema[key];
        const value = data[key];
        if (rules.required && (value === undefined || value === null)) {
          errors[key] = "Required field";
        }
      }
      return Object.keys(errors).length === 0 
        ? { success: true, data } 
        : { success: false, error: errors };
    }
  }),
  string: () => ({ required: true }),
  number: () => ({ required: true })
};

module.exports = { s };
