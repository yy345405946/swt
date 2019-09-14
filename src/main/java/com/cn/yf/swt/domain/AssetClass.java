package com.cn.yf.swt.domain;

import lombok.Data;

import javax.persistence.Id;
import java.util.List;

//课程
@Data
public class AssetClass {

    @Id
    private int id;
    private int order;
    private String icon;
    private String description;
    private String assetClass;
    private String subAssetClassList;
    private List<AssetClassDetails> assetClassDetailsList;
    private List<AssetClassProblem> assetClassProblemList;
    private String isEnable;

}
