package com.cn.yf.swt.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class SwtController {

    @RequestMapping(value="upload")
    public String upload(){
        log.info("update");
        return "hahha";
    }

}
