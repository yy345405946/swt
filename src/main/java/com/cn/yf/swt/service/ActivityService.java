package com.cn.yf.swt.service;

import com.cn.yf.swt.domain.Activity;
import com.cn.yf.swt.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.stereotype.Service;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    public long count(){
        return activityRepository.count();
    }

    public Iterable<Activity> findAll(){
        return activityRepository.findAll();
    }

    public Activity save(Activity activity){
        return activityRepository.save(activity);
    }

    public void delete(Activity activity){
        activityRepository.delete(activity);
    }

    public Page<Activity> pageQuery(Integer pageNo, Integer pageSize){
        SearchQuery searchQuery = new NativeSearchQueryBuilder()
                //.withQuery(QueryBuilders.matchPhraseQuery("",""))
                .withPageable(PageRequest.of(pageNo, pageSize))
                .build();
        return activityRepository.search(searchQuery);
    }

}
