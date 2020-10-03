using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GetDataFromDataBase_jQueryAjax.Models;

namespace GetDataFromDataBase_jQueryAjax.Controllers
{
    
    public class HomeController : Controller
    {
        theportalEntities db = new theportalEntities();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetData()
        {
            List<tblUser> users = db.tblUsers.ToList();

            return Json(new { data= users},JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            return View(db.tblUsers.ToList());
        }

        public ActionResult StudentInfo(int id=0)
        {
            var student = db.tblUsers.Where(n => n.Id == id).FirstOrDefault();
            return View(student);
        }
    }
}