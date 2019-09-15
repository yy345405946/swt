package com.cn.yf.swt.web;

import com.cn.yf.swt.domain.Vedio;
import com.cn.yf.swt.service.VedioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="vedio")
public class VedioController {

    @Autowired
    private VedioService vedioService;

    @GetMapping(value="findAll")
    public Iterable<Vedio> findAll(){
        return vedioService.findAll();
    }

    @GetMapping(value="findByPage")
    public Page<Vedio> findByPage(
            @RequestParam(required=false, defaultValue = "0") Integer pageNo,
            @RequestParam(required=false, defaultValue = "20") Integer pageSize){
        return vedioService.pageQuery(pageNo, pageSize);
    }

    @PutMapping(value="save")
    public Vedio save(Vedio vedio){
        return vedioService.save(vedio);
    }

}
