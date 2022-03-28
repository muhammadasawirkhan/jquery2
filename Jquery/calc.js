
$(document).ready(
					function()
					{

						var input1=$("<input/>");
						input1.attr("type","number");
						input1.attr("id","num1");

						var input2=$("<input/>");
						input2.attr("type","number");
						input2.attr("id","num2");

						var input3=$("<input/>");
						input3.attr("type","number");
						input3.attr("id","result");

						var br=$("<br/>");
						$("#main").append(input1);
						$("#main").append(br);
						
						$("#main").append(input2);
						$("#main").append(br);
						
						$("#main").append(input3);
												
						$("#main").append(br);
						
						var button=$("<button/>");
						button.text("+");
						$("#main").append(button);
								
						button.click(
							function()
							{
								var a=$("#num1").val();
								var b=$("#num2").val();
								
								var c=Number(a)+Number(b);
								$("#result").val(c);
							}
							);
						
					}

				);

