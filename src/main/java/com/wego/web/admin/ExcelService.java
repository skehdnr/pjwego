package com.wego.web.admin;
import java.io.FileInputStream;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.wego.web.mapper.AdminMapper;
import com.wego.web.tourism.Tourism;


@Component
public class ExcelService {
	@Autowired AdminMapper adminMapper;
	public static Workbook getWorkbook(String filePath){
		
		try {
			FileInputStream file = new FileInputStream("C:\\wego\\tourism.xlsx");
			XSSFWorkbook workbook = new XSSFWorkbook(file);

			int rowindex=0;
			int columnindex=0;
			//시트 수 (첫번째에만 존재하므로 0을 준다)
			//만약 각 시트를 읽기위해서는 FOR문을 한번더 돌려준다
			XSSFSheet sheet=workbook.getSheetAt(0);
			//행의 수
			int rows=sheet.getPhysicalNumberOfRows();
			for(rowindex=0;rowindex<rows;rowindex++){
				//행을읽는다
				XSSFRow row=sheet.getRow(rowindex);
				if(row !=null){
					//셀의 수
					int cells=row.getPhysicalNumberOfCells();
					for(columnindex=0; columnindex<=cells; columnindex++){
						//셀값을 읽는다
						XSSFCell cell=row.getCell(columnindex);
						String value="";
						//셀이 빈값일경우를 위한 널체크
						if(cell==null){
							continue;
						}else{

						}
						System.out.println(rowindex+"번 행 : "+columnindex+"번 열 값은: "+value);
						
					}
				}
				
			}

		}catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public Tourism makeExcle() {
		return new Tourism ();
	}
	
	@Transactional
	public void insertExcel() {
		Tourism getWorkbook = null;
		adminMapper.insertTour(getWorkbook);
	}
}

