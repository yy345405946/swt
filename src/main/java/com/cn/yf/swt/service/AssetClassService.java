package com.cn.yf.swt.service;

import com.cn.yf.swt.domain.AssetClass;
import com.cn.yf.swt.repository.AssetClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.stereotype.Service;

@Service
public class AssetClassService {

    @Autowired
    private AssetClassRepository assetClassRepository;

    public long count(){
        return assetClassRepository.count();
    }

    public Iterable<AssetClass> findAll(){
        return assetClassRepository.findAll();
    }

    public AssetClass save(AssetClass assetClass){
        return assetClassRepository.save(assetClass);
    }

    public void delete(AssetClass assetClass){
        assetClassRepository.delete(assetClass);
    }

    public Page<AssetClass> pageQuery(Integer pageNo, Integer pageSize){
        SearchQuery searchQuery = new NativeSearchQueryBuilder()
                //.withQuery(QueryBuilders.matchPhraseQuery("",""))
                .withPageable(PageRequest.of(pageNo, pageSize))
                .build();
        return assetClassRepository.search(searchQuery);
    }

}
