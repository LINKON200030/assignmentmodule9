const router=require('express').Router()

//All Controller
const adminController=require('../Controllers/adminController')
const postController=require('../Controllers/postController')
const subAdminController=require('../Controllers/subAdminController')
const userController=require('../Controllers/userController')


//All Routes
router.get('/admin/read',adminController.read)
router.get('/admin/create',adminController.create)
router.get('/admin/update',adminController.update)
router.get('/admin/delete',adminController.delete)


router.get('/post/read',postController.read)
router.get('/post/create',postController.create)
router.get('/post/update',postController.update)
router.get('/post/delete',postController.delete)


router.get('/subadmin/read',subAdminController.read)
router.get('/subadmin/create',subAdminController.create)
router.get('/subadmin/update',subAdminController.update)
router.get('/subadmin/delete',subAdminController.delete)


router.get('/user/read',userController.read)
router.get('/user/create',userController.create)
router.get('/user/update',userController.update)
router.get('/user/delete',userController.delete)



module.exports=router;