package com.cn.yf.swt.web;

import com.cn.yf.swt.domain.Activity;
import com.cn.yf.swt.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="activity")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping(value="findAll")
    public Iterable<Activity> findAll(){
        return activityService.findAll();
    }

    @GetMapping(value="findByPage")
    public Page<Activity> findByPage(
            @RequestParam(required=false, defaultValue = "0") Integer pageNo,
            @RequestParam(required=false, defaultValue = "20") Integer pageSize){
        return activityService.pageQuery(pageNo, pageSize);
    }

    @PutMapping(value="save")
    public Activity save(Activity activity){
        return activityService.save(activity);
    }

}
