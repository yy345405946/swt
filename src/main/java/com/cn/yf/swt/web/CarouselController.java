package com.cn.yf.swt.web;

import com.cn.yf.swt.domain.Carousel;
import com.cn.yf.swt.service.CarouselService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="carousel")
public class CarouselController {

    @Autowired
    private CarouselService carouselService;

    @GetMapping(value="findAll")
    public Iterable<Carousel> findAll(){
        return carouselService.findAll();
    }

    @GetMapping(value="findByPage")
    public Page<Carousel> findByPage(
            @RequestParam(required=false, defaultValue = "0") Integer pageNo,
            @RequestParam(required=false, defaultValue = "20") Integer pageSize){
        return carouselService.pageQuery(pageNo, pageSize);
    }

    @PutMapping(value="save")
    public Carousel save(Carousel carousel){
        return carouselService.save(carousel);
    }


}
