package com.cn.yf.swt.repository;

import com.cn.yf.swt.domain.Vedio;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VedioRepository extends ElasticsearchRepository<Vedio, String>{
}
