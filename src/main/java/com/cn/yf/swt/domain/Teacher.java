package com.cn.yf.swt.domain;

import lombok.Data;

import java.util.List;

@Data
public class Teacher {

    private int id;
    private String order;
    private String name;
    private String image;
    private String title;
    private String description;
    private List<String> production;
    private String isEnable;

}
