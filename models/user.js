import Schema from moongose




const re = new Schema ({
    name: { type:String, required:true},
    userName: { type:String, unique:true},
    email: { type:String, required:true, unique:true},
    phone: { type:String, unique:true},
    password: { type:String, required:true},
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const UserModel = model('USer', userSchema)