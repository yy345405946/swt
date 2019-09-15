package com.cn.yf.swt.web;

import com.cn.yf.swt.domain.Teacher;
import com.cn.yf.swt.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @GetMapping(value="findAll")
    public Iterable<Teacher> findAll(){
        return teacherService.findAll();
    }

    @GetMapping(value="findByPage")
    public Page<Teacher> findByPage(
            @RequestParam(required=false, defaultValue = "0") Integer pageNo,
            @RequestParam(required=false, defaultValue = "20") Integer pageSize){
        return teacherService.pageQuery(pageNo, pageSize);
    }

    @PutMapping(value="save")
    public Teacher save(Teacher teacher){
        return teacherService.save(teacher);
    }

}
