package dduw.com.mobile.umc_9th_week1

import android.graphics.Color
import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import dduw.com.mobile.umc_9th_week1.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        binding.img1.setOnClickListener{
            binding.textV1.setTextColor(Color.YELLOW)
            Toast.makeText(this,"더 없이 행복한 하루를 보내셨군요!", Toast.LENGTH_SHORT).show()
        }
        binding.img2.setOnClickListener{
            binding.textV2.setTextColor(Color.BLUE)
            Toast.makeText(this,"들뜨는 하루를 보내셨군요!!", Toast.LENGTH_SHORT).show()
        }
        binding.img3.setOnClickListener{
            binding.textV3.setTextColor(Color.MAGENTA)
            Toast.makeText(this,"평범한 하루를 보내셨군요!", Toast.LENGTH_SHORT).show()
        }
        binding.img4.setOnClickListener{
            binding.textV4.setTextColor(Color.GREEN)
            Toast.makeText(this,"생각이 많아지고 불안한 하루를 보내셨군요...", Toast.LENGTH_SHORT).show()
        }
        binding.img5.setOnClickListener{
            binding.textV5.setTextColor(Color.RED)
            Toast.makeText(this,"화나는 하루를 보내셨군요...", Toast.LENGTH_SHORT).show()
        }


    }
}