package com.cn.yf.swt.web;

import com.cn.yf.swt.domain.AssetClass;
import com.cn.yf.swt.service.AssetClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="assetClass")
public class AssetClassController {

    @Autowired
    private AssetClassService assetClassService;

    @GetMapping(value="findAll")
    public Iterable<AssetClass> findAll(){
        return assetClassService.findAll();
    }

    @GetMapping(value="findByPage")
    public Page<AssetClass> findByPage(
            @RequestParam(required=false, defaultValue = "0") Integer pageNo,
            @RequestParam(required=false, defaultValue = "20") Integer pageSize){
        return assetClassService.pageQuery(pageNo, pageSize);
    }

    @PutMapping(value="save")
    public AssetClass save(AssetClass assetClass){
        return assetClassService.save(assetClass);
    }

}
