package com.cn.yf.swt.repository;

import com.cn.yf.swt.domain.Teacher;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends ElasticsearchRepository<Teacher, String>{
}
