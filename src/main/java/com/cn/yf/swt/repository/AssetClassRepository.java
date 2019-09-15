package com.cn.yf.swt.repository;

import com.cn.yf.swt.domain.AssetClass;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetClassRepository extends ElasticsearchRepository<AssetClass, String>{
}
