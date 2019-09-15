package com.cn.yf.swt.repository;

import com.cn.yf.swt.domain.Activity;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends ElasticsearchRepository<Activity, String>{
}
