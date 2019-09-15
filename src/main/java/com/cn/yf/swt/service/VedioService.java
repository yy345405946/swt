package com.cn.yf.swt.service;

import com.cn.yf.swt.domain.Vedio;
import com.cn.yf.swt.repository.VedioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.stereotype.Service;

@Service
public class VedioService {

    @Autowired
    private VedioRepository vedioRepository;

    public long count(){
        return vedioRepository.count();
    }

    public Iterable<Vedio> findAll(){
        return vedioRepository.findAll();
    }

    public Vedio save(Vedio vedio){
        return vedioRepository.save(vedio);
    }

    public void delete(Vedio vedio){
        vedioRepository.delete(vedio);
    }

    public Page<Vedio> pageQuery(Integer pageNo, Integer pageSize){
        SearchQuery searchQuery = new NativeSearchQueryBuilder()
                //.withQuery(QueryBuilders.matchPhraseQuery("",""))
                .withPageable(PageRequest.of(pageNo, pageSize))
                .build();
        return vedioRepository.search(searchQuery);
    }

}
